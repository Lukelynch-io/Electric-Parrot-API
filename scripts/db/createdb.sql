-- Database: ElectricParrot

-- DROP DATABASE IF EXISTS "ElectricParrot";

CREATE TABLE nodes (
	id serial PRIMARY KEY,
	pubKey VARCHAR(100) UNIQUE NOT NULL,
	joinDate TIMESTAMP NOT NULL,
	lastLogin TIMESTAMP
)