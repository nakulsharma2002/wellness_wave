

from flask import Flask, request, jsonify
import numpy as np
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/exercise', methods=['POST'])
def exercise():
    try:
        data = request.json
        bodypart = data.get('bodypart')
        typeofmuscle = data.get('typeofmuscle')

        if not bodypart or not typeofmuscle:
            return jsonify({"error": "Missing required fields: 'bodypart' or 'typeofmuscle'"}), 400

        # Load models and predict (example logic, adjust based on your needs)
        with open('D:\\Desktop\\Wellness-React\\Backend\\workout_model.pkl', 'rb') as f:
            workout_model = pickle.load(f)
        with open('D:\\Desktop\\Wellness-React\\Backend\\sets_reps_model.pkl', 'rb') as f:
            sets_reps_model = pickle.load(f)
        with open('D:\\Desktop\\Wellness-React\\Backend\\excersie_encoder.pkl', 'rb') as f:
            Label_encoder = pickle.load(f)

        # Convert inputs to numeric
        bodypart_encoded = Label_encoder['Body Part'].transform([bodypart])
        typeofmuscle_encoded = Label_encoder['Type of Muscle'].transform([typeofmuscle])

        # Predict workout
        prediction_input = [[bodypart_encoded[0], typeofmuscle_encoded[0]]]
        workout_pred = workout_model.predict(prediction_input)
        sets_reps_pred = sets_reps_model.predict(prediction_input)

        # Decode results
        workout_decoded = Label_encoder['Workout'].inverse_transform([workout_pred[0]])
        result = {
            "Workout": workout_decoded[0],
            "Sets": sets_reps_pred[0][0],
            "Reps": sets_reps_pred[0][1]
        }

        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500








# Load the trained model and encoders
with open('D:\\Desktop\\Wellness-React\\Backend\\model.pkl', 'rb') as f:
    model = pickle.load(f)
with open('D:\\Desktop\\Wellness-React\\Backend\\encoders.pkl', 'rb') as f:
    encoders = pickle.load(f)

# Define label encoders for each target variable
le_exercises = encoders['le_exercises']
le_equipment = encoders['le_equipment']
le_diet = encoders['le_diet']
le_recommendation = encoders['le_recommendation']

# Define mappings for string inputs
sex_mapping = {'Male': 1, 'Female': 0}
level_mapping = {'Beginner': 0, 'Intermediate': 1, 'Advanced': 2}
goal_mapping = {'Weight Loss': 0, 'Muscle Gain': 1, 'General Fitness': 2}
type_mapping = {'Strength': 0, 'Cardio': 1, 'Flexibility': 2}
yes_no_mapping = {'Yes': 1, 'No': 0}

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    required_keys = ['Sex', 'Age', 'BMI', 'Level', 'FitnessGoal', 'FitnessType', 'Hypertension', 'Diabetes']

    for key in required_keys:
        if key not in data:
            return jsonify({"error": f"Missing {key} in the request"}), 400

    try:
        # Map string inputs to numeric values
        input_data = [
            sex_mapping.get(data['Sex'], 0), 
            int(data['Age']),
            float(data['BMI']),
            level_mapping.get(data['Level'], 0),
            goal_mapping.get(data['FitnessGoal'], 0),
            type_mapping.get(data['FitnessType'], 0),
            yes_no_mapping.get(data['Hypertension'], 0),
            yes_no_mapping.get(data['Diabetes'], 0)
        ]
        input_data = np.array(input_data).reshape(1, -1)

        print("Input data for prediction:", input_data)  # Debugging statement

        # Make a prediction
        prediction = model.predict(input_data).flatten()
        print("Raw prediction:", prediction)  # Debugging statement

        # Decode the numeric predictions to readable text
        result = {
            'Exercises': le_exercises.inverse_transform([int(prediction[0])])[0],
            'Equipment': le_equipment.inverse_transform([int(prediction[1])])[0],
            'Diet': le_diet.inverse_transform([int(prediction[2])])[0],
            'Recommendation': le_recommendation.inverse_transform([int(prediction[3])])[0]
        }

        print("Decoded result:", result)  # Debugging statement

        return jsonify(result)

    except KeyError as e:
        return jsonify({"error": f"Missing data key: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": f"Server error: {str(e)}"}), 500



if __name__ == '__main__':
    app.run(debug=True)
