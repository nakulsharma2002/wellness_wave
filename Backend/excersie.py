# import pandas as pd
# import pickle
# from sklearn.preprocessing import LabelEncoder, StandardScaler
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import RandomForestRegressor
# from sklearn.metrics import mean_squared_error, r2_score

# # Load data
# data = pd.read_csv('D:\\Desktop\\Wellness-React\\Backend\\Workout.csv')
# print("Initial data sample:")
# print(data.head(1))

# # Label Encoders for each column
# label_encoders = {}  # Store each label encoder to save later
# for column in data.columns:
#     le = LabelEncoder()
#     data[column] = le.fit_transform(data[column])
#     label_encoders[column] = le

# print("Data after Label Encoding:")
# print(data.head())

# # Standard Scaling
# scaler = StandardScaler()
# data = pd.DataFrame(scaler.fit_transform(data), columns=data.columns)
# print("Data after Scaling:")
# print(data.head())

# # Splitting into features and target
# X = data[['Body Part', 'Type of Muscle']]
# Y = data[['Workout', 'Sets', 'Reps per Set']]

# # Train-test split
# X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.3, random_state=42)

# # Model training
# model = RandomForestRegressor()
# model.fit(X_train, Y_train)

# # Prediction
# y_pred = model.predict(X_test)

# # Model evaluation
# mse_Workout = mean_squared_error(Y_test['Workout'], y_pred[:, 0])
# mse_Sets = mean_squared_error(Y_test['Sets'], y_pred[:, 1])
# mse_Reps = mean_squared_error(Y_test['Reps per Set'], y_pred[:, 2])

# r2_Workout = r2_score(Y_test['Workout'], y_pred[:, 0])
# r2_Sets = r2_score(Y_test['Sets'], y_pred[:, 1])
# r2_Reps = r2_score(Y_test['Reps per Set'], y_pred[:, 2])

# print("Workout MSE:", mse_Workout)
# print("Workout R²:", r2_Workout)
# print("Sets MSE:", mse_Sets)
# print("Sets R²:", r2_Sets)
# print("Reps MSE:", mse_Reps)
# print("Reps R²:", r2_Reps)

# # Saving the trained model
# with open('D:\\Desktop\\Wellness-React\\Backend\\excersie_model.pkl', 'wb') as f:
#     pickle.dump(model, f)

# # Saving the label encoders
# with open('D:\\Desktop\\Wellness-React\\Backend\\excersie_encoder.pkl', 'wb') as f:
#     pickle.dump(label_encoders, f)

# print("Model and label encoders have been saved.")










import pandas as pd 
import pickle

data=pd.read_csv('D:\\Desktop\\Wellness-React\\Backend\\Workout.csv')
data.head(1)

import numpy as np
import re


# Function to extract numeric values or averages
def convert_to_numeric(value, is_reps=False):
    if isinstance(value, str):
        # Check for patterns like '3 sets of 10'
        match = re.search(r"(\d+)\s*sets?\s*of\s*(\d+)", value)
        if match:
            return float(match.group(2)) if is_reps else float(match.group(1))

        # Check for range format like '3-4'
        if '-' in value:
            try:
                start, end = map(int, value.split('-'))
                return (start + end) / 2  # Return average of range
            except ValueError:
                return np.nan  # Ignore if not convertible to int range

        # Ignore time-based descriptions such as '60 seconds'
        if 'second' in value or 'minute' in value:
            return np.nan  # Ignore non-numeric descriptions

        # Try converting other strings to float
        try:
            return float(value)
        except ValueError:
            return np.nan  # For non-numeric values, return NaN
    else:
        return float(value) if not np.isnan(value) else np.nan  # Ensure numeric type

# Apply the function to the relevant columns
data['Sets'] = data['Sets'].apply(lambda x: convert_to_numeric(x, is_reps=False))
data['Reps per Set'] = data['Reps per Set'].apply(lambda x: convert_to_numeric(x, is_reps=True))

# Drop rows with NaN values in 'Sets' or 'Reps per Set' columns after conversion
data.dropna(subset=['Sets', 'Reps per Set'], inplace=True)

# Proceed with label encoding and model training as before
# ...

# Label Encoders
Label_encoder={}
from sklearn.preprocessing import LabelEncoder
categorical_columns = ['Body Part','Type of Muscle','Workout']
for column in categorical_columns:
    le=LabelEncoder()
    data[column] = le.fit_transform(data[column])
    Label_encoder[column]=le

data.head()
from sklearn.preprocessing import StandardScaler
s = StandardScaler()
data[['Body Part','Type of Muscle']] = s.fit_transform(data[['Body Part','Type of Muscle']])

data.head()
X = data[['Body Part','Type of Muscle']]
Y_workout = data[['Workout']]
Y_sets_reps = data[['Sets','Reps per Set']]


from sklearn.model_selection  import train_test_split

X_train, X_test, Y_workout_train, Y_workout_test, Y_sets_reps_train, Y_sets_reps_test = train_test_split(
    X, Y_workout, Y_sets_reps, test_size=0.3, random_state=42
)

from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score
# Model training for Workout prediction (classification)
workout_model = RandomForestClassifier()
workout_model.fit(X_train, Y_workout_train)

# Model training for Sets and Reps prediction (regression)
sets_reps_model = RandomForestRegressor()
sets_reps_model.fit(X_train, Y_sets_reps_train)


# Save models and encoders
with open('D:\\Desktop\\Wellness-React\\Backend\\workout_model.pkl', 'wb') as f:
    pickle.dump(workout_model, f)
with open('D:\\Desktop\\Wellness-React\\Backend\\sets_reps_model.pkl', 'wb') as f:
    pickle.dump(sets_reps_model, f)
with open('D:\\Desktop\\Wellness-React\\Backend\\excersie_encoder.pkl', 'wb') as f:
    pickle.dump(Label_encoder, f)

























# import numpy as np
# import re
# from sklearn.preprocessing import LabelEncoder, StandardScaler
# from sklearn.model_selection import train_test_split
# from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
# from sklearn.metrics import accuracy_score, mean_squared_error, r2_score
# import pickle
# import pandas as pd


# data=pd.read_csv('D:\\Desktop\\Wellness-React\\Backend\\Workout.csv')
# # Function to extract numeric values or averages from ranges or formatted strings
# def convert_to_numeric(value, is_reps=False):
#     if isinstance(value, str):
#         # Check for patterns like '3 sets of 10'
#         match = re.search(r"(\d+)\s*sets?\s*of\s*(\d+)", value)
#         if match:
#             return float(match.group(2)) if is_reps else float(match.group(1))

#         # Check for range format like '3-4'
#         if '-' in value:
#             try:
#                 start, end = map(int, value.split('-'))
#                 return (start + end) / 2  # Return average of range
#             except ValueError:
#                 return np.nan  # Ignore if not convertible to int range

#         # Ignore time-based descriptions such as '60 seconds'
#         if 'second' in value or 'minute' in value:
#             return np.nan  # Ignore non-numeric descriptions

#         # Try converting other strings to float
#         try:
#             return float(value)
#         except ValueError:
#             return np.nan  # For non-numeric values, return NaN
#     else:
#         return float(value) if not np.isnan(value) else np.nan  # Ensure numeric type

# # Apply the function to convert the Sets and Reps columns to numeric
# data['Sets'] = data['Sets'].apply(lambda x: convert_to_numeric(x, is_reps=False))
# data['Reps per Set'] = data['Reps per Set'].apply(lambda x: convert_to_numeric(x, is_reps=True))

# # Drop rows with NaN values in 'Sets' or 'Reps per Set' columns after conversion
# data.dropna(subset=['Sets', 'Reps per Set'], inplace=True)

# # Label Encoding for categorical columns
# Label_encoder = {}
# categorical_columns = ['Body Part', 'Type of Muscle', 'Workout']
# for column in categorical_columns:
#     le = LabelEncoder()
#     data[column] = le.fit_transform(data[column])
#     Label_encoder[column] = le

# # Feature scaling for inputs
# scaler = StandardScaler()
# data[['Body Part', 'Type of Muscle']] = scaler.fit_transform(data[['Body Part', 'Type of Muscle']])

# # Splitting data for model training
# X = data[['Body Part', 'Type of Muscle']]
# Y_workout = data['Workout']
# Y_sets_reps = data[['Sets', 'Reps per Set']]

# # Split data into training and test sets
# X_train, X_test, Y_workout_train, Y_workout_test, Y_sets_reps_train, Y_sets_reps_test = train_test_split(
#     X, Y_workout, Y_sets_reps, test_size=0.3, random_state=42
# )

# # Train the models with Random Forest
# # Workout model (classification)
# workout_model = RandomForestClassifier(n_estimators=200, max_depth=10, random_state=42)
# workout_model.fit(X_train, Y_workout_train)

# # Sets and Reps model (regression)
# sets_reps_model = RandomForestRegressor(n_estimators=200, max_depth=10, random_state=42)
# sets_reps_model.fit(X_train, Y_sets_reps_train)

# # Evaluate models
# workout_pred = workout_model.predict(X_test)
# sets_reps_pred = sets_reps_model.predict(X_test)

# # Calculate accuracy for classification
# workout_accuracy = accuracy_score(Y_workout_test, workout_pred)

# # Calculate performance metrics for regression
# mse = mean_squared_error(Y_sets_reps_test, sets_reps_pred)
# r2 = r2_score(Y_sets_reps_test, sets_reps_pred)

# # Save models and encoders
# with open('D:\\Desktop\\Wellness-React\\Backend\\workout_model.pkl', 'wb') as f:
#     pickle.dump(workout_model, f)
# with open('D:\\Desktop\\Wellness-React\\Backend\\sets_reps_model.pkl', 'wb') as f:
#     pickle.dump(sets_reps_model, f)
# with open('D:\\Desktop\\Wellness-React\\Backend\\exercise_encoder.pkl', 'wb') as f:
#     pickle.dump(Label_encoder, f)
# with open('D:\\Desktop\\Wellness-React\\Backend\\scaler.pkl', 'wb') as f:
#     pickle.dump(scaler, f)

# workout_accuracy, mse, r2
