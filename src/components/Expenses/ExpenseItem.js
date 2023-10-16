import Card from "../UI/Card";
import { Link } from "react-router-dom";
import "./ExpenseItem.css";

const ExpenseItem = ({ id, title, date, amount, deleteItem }) => {
  const month = date.toLocaleString("in-ID", { month: "long" });
  const day = date.toLocaleString("in-ID", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <li>
      <Card className="expense-item">
        <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__year">{year}</div>
          <div className="expense-date__day">{day}</div>
        </div>
        <div className="expense-item__description">
          <span>{title}</span>
          <div className="expense-item__details">
            <div className="expense-item__price">${amount}</div>
            <Link to={`edit/${id}`} className="update-button">
              Update
            </Link>
          </div>
        </div>
        <div className="expense-item__actions">
          <button className="delete-button" onClick={deleteItem}>
            &#215;
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
