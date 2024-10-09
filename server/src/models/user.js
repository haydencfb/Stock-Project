import { DataTypes, Model } from "sequelize";
import bcrypt from "bcrypt";
export class User extends Model {
  // Hash the password before saving the user
  setPassword(password) {
    const saltRounds = 10;
    this.password = bcrypt.hashSync(password, saltRounds);
  }
}

export function UserFactory(sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      sequelize,
      hooks: {
        beforeCreate: async (user) => {
          user.setPassword(user.password);
        },
        beforeUpdate: async (user) => {
          user.setPassword(user.password);
        },
      },
    },
  );
  return User;
}
