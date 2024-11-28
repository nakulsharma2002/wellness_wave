
import pandas as pd
import pickle
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load the dataset
data = pd.read_excel('D:\\Desktop\\Wellness-React\\Backend\\gym recommendation.xlsx')

# Drop unnecessary columns
data.drop(['Height', 'Weight'], axis=1, inplace=True)

# Initialize label encoders for the categorical features and target variables
le_sex = LabelEncoder()
le_level = LabelEncoder()
le_fitness_goal = LabelEncoder()
le_fitness_type = LabelEncoder()
le_hypertension = LabelEncoder()
le_diabetes = LabelEncoder()

# Ordinal Encoding for target variables
le_exercises = LabelEncoder()
le_equipment = LabelEncoder()
le_diet = LabelEncoder()
le_recommendation = LabelEncoder()

# Encode categorical features
data['Sex'] = le_sex.fit_transform(data['Sex'])
data['Level'] = le_level.fit_transform(data['Level'])
data['Fitness Goal'] = le_fitness_goal.fit_transform(data['Fitness Goal'])
data['Fitness Type'] = le_fitness_type.fit_transform(data['Fitness Type'])
data['Hypertension'] = le_hypertension.fit_transform(data['Hypertension'])
data['Diabetes'] = le_diabetes.fit_transform(data['Diabetes'])

# Encode the target columns (Exercises, Equipment, Diet, Recommendation)
data['Exercises'] = le_exercises.fit_transform(data['Exercises'])
data['Equipment'] = le_equipment.fit_transform(data['Equipment'])
data['Diet'] = le_diet.fit_transform(data['Diet'])
data['Recommendation'] = le_recommendation.fit_transform(data['Recommendation'])

# Standardize the numerical features (Age, BMI)
scaler = StandardScaler()
data[['Age', 'BMI']] = scaler.fit_transform(data[['Age', 'BMI']])

# Split the data into features (X) and targets (Y)
X = data[['Sex', 'Age', 'BMI', 'Level', 'Fitness Goal', 'Fitness Type', 'Hypertension', 'Diabetes']]
Y = data[['Exercises', 'Equipment', 'Diet', 'Recommendation']]

# Split the data into training and testing sets
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.3, random_state=42)

# Train the RandomForestClassifier
model = RandomForestClassifier()
model.fit(X_train, Y_train)

# Predict on the test set
y_pred = model.predict(X_test)

# Calculate accuracy for each output individually
accuracy_exercises = accuracy_score(Y_test['Exercises'], y_pred[:, 0])
accuracy_equipment = accuracy_score(Y_test['Equipment'], y_pred[:, 1])
accuracy_diet = accuracy_score(Y_test['Diet'], y_pred[:, 2])
accuracy_recommendation = accuracy_score(Y_test['Recommendation'], y_pred[:, 3])

# Print the individual accuracies
print("Accuracy for Exercises:", accuracy_exercises * 100)
print("Accuracy for Equipment:", accuracy_equipment * 100)
print("Accuracy for Diet:", accuracy_diet * 100)
print("Accuracy for Recommendation:", accuracy_recommendation * 100)

# Calculate the average accuracy
average_accuracy = (accuracy_exercises + accuracy_equipment + accuracy_diet + accuracy_recommendation) / 4
print("Average Accuracy:", average_accuracy * 100)

# Save the model and the encoders to disk for later use
with open('D:\\Desktop\\Wellness-React\\Backend\\model.pkl', 'wb') as f:
    pickle.dump(model, f)

# Save the encoders
with open('D:\\Desktop\\Wellness-React\\Backend\\encoders.pkl', 'wb') as f:
    pickle.dump({
        'le_exercises': le_exercises,
        'le_equipment': le_equipment,
        'le_diet': le_diet,
        'le_recommendation': le_recommendation
    }, f)