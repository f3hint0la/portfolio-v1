import { Card, Button } from "react-bootstrap";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillFolderOpen } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import "../../styles/Project.css";

const PCard = (props) => {
  return (
    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <AiFillFolderOpen style={{ fontSize: 35, position: "absolute" }} />
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Footer className="card-footer">{props.techStack}</Card.Footer>
        <Button className="card-button" href={props.githubLink} target="_blank">
          <AiOutlineGithub />
        </Button>
        <Button className="card-button" href={props.demoLink} target="_blank">
          <CgWebsite />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PCard;
