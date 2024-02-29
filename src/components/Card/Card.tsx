import Header from "../Header/Header";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";

type cardProps = {
  title: string;
  description: string;
  handleEdit?: () => void;
  handleDelete?: () => void;
};

const Card = ({ title, description, handleEdit, handleDelete }: cardProps) => {
  return (
    <div className="main-container">
      <div className="card-container">
        <div className="card-header">
          <Header label={title} />
        </div>
        <div className="card-paragraph">
          <Paragraph label={description} />
        </div>
        <div className="card-button">
          <div className="main-btn-container">
            <div className="child-button">
              <Button label="Edit" isSuccess handleClick={handleEdit} />
            </div>
            <div className="child-button">
              <Button label="Delete" isError handleClick={handleDelete} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
