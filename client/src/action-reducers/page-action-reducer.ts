import { IAction } from ".";
import { IState } from "../App";

function pageActionListener(comp: React.Component<{}, IState>, action: IAction) {
 if (action.type === "CHANGE LOCATION") {
   const {page} = comp.state;
   switch(action.payload.location) {
     case "/":
      page.heading = "Sloan Gwaltney";
      page.subHeading = "A passionate diversified web developer";
    case "/node-mailer":
      page.heading = "I Can Mail";
      page.subHeading = "Email is a important way to notify clients";
   }
 }
}

export default pageActionListener
