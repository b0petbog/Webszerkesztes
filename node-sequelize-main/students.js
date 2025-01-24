import Sequelize from "sequelize";
const { DataTypes } = Sequelize;

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./database.sqlite",
	define: {
		timestamps: false,
	},
});

//1. Hozz létre egy táblát students néven
const Students = sequelize.define(
	"students",
	{
		//a) student_id : Integer, primary key, auto increment
		user_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		//b) name: VARCHAR(255) nem megengedett a  null érték, validálás: legalább 4 és maximun 20 karakter lehet
		name: {
			type: DataTypes.VARCHAR(255),
			allowNull: false,
			validate: {
				len: [4, 20]
			}
		},
		//c) favorite_class: VARCHAR(25), default value: 'Computer Science'
		favorite_class: {
			type: DataTypes.VARCHAR(25),
			defaultValue: 'Computer Science'
		},
		//d) school_year: Integer,  nem megengedett a  null érték
		school_year: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		//e) has_language_examination: Tiny int, default value: True
		has_language_examination: {
			type: DataTypes.TINYINT,
			defaultValue: true
		},
	}
);

//2. Hozz létre legalább 5 adatok bulkCreate-tel!
Students.sync({ alert: true })
	.then(() => {
		return Students.bulkCreate([
    	  { name: "Skyler", favorite_class: "Art", school_year: 13, has_language_examination: true },
		  { name: "Michael", favorite_class: "PE", school_year: 11, has_language_examination: false },
		  { name: "Charlie", favorite_class: "History", school_year: 13, has_language_examination: true },
		  { name: "Layla", favorite_class: "Computer Science", school_year: 10, has_language_examination: false },
		  { name: "Simon", favorite_class: "Being at home", school_year: 9, has_language_examination: false },

	],

  );
	})
	.catch((err) => {
		console.log(`Error: ${err.message}`);
	});

//3. Készíts queryket:
//a) Kérd le azon diákok neveit, akiknek a kedvenc tantágya a Computer Science vagy van nyelvvizsgája
Students.sync({ alter: true })
.then(() => {
	return Students.findAll({
		where: {
			[Sequelize.Op.or]: [
				{ favorite_class: "Computer Science" },
				{ has_language_examination: true },
			]
		}
	});
})
.then((students) => {
	students.forEach(student => {
		console.log(student.name); 
	});
})
	.catch((err) => {
		console.log(`Error: ${err.message}`);
	});

//b) num_students aliassal írasd ki évfolyamonként a tanulók számát (COUNT)
