CREATE TABLE IF NOT EXISTS users (
id INT NOT NULL AUTO_INCREMENT,
name varchar(80),
mobile varchar(12),
password varchar(20),
email varchar(50),
profile_picture TEXT,
gender TEXT,
dob date,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS status
(
id INT NOT NULL AUTO_INCREMENT,
status_title TEXT NOT NULL,
user_id INT,
like_count INT,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(id),
FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS comments
(
id INT NOT NULL AUTO_INCREMENT,
comment_title TEXT NOT NULL,
user_id INT,
status_id INT,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(id),
FOREIGN KEY(status_id) REFERENCES status(id) ON DELETE CASCADE,
FOREIGN KEY(user_id) REFERENCES users(id)
)

CREATE TABLE IF NOT EXISTS friends
(
id INT  NOT NULL AUTO_INCREMENT,
friend_id INT,
user_id INT,
PRIMARY KEY(id),
FOREIGN KEY(friend_id) REFERENCES users(id),
FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS workouts
(
id INT  NOT NULL AUTO_INCREMENT,
workout_type TEXT,
start_date date,
last_date date,
duration varchar(10),
weight INT,
repeats INT,
user_id INT,
PRIMARY KEY(id),
FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS exercises
(
id INT  NOT NULL AUTO_INCREMENT,
exercise_type TEXT,
food_name text,
ref_url text,
user_id INT,
PRIMARY KEY(id),
FOREIGN KEY(user_id) REFERENCES users(id)
);

