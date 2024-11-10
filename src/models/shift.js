module.exports = (sequelize, DataTypes) => {
  const Shift = sequelize.define(
    "Shift",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      workerId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
        name: "worker_id_foreign_key",
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "companies",
          key: "id",
        },
        name: "company_id_foreign_key",
      },
      startHour: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      endHour: {
        type: DataTypes.TIME,
        allowNull: true,
      },
    },
    {
      tableName: "shifts",
      timestamps: true,
      indexes: [
        {
          fields: ["date"],
          name: "date_company_index",
        },
      ],
    }
  );

  return Shift;
};