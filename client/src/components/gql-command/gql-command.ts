import { createAction } from "../../action-reducers";
import { IState } from "../../App";

interface IProps {
  local: string
  state: IState
  query: string
}
// work in progress
const GQLCommand = (props: IProps) => {
      if (props.state.gql.active) {
        fetch(props.state.env.gqlFetch, {
          body: JSON.stringify({query: props.query}),
          headers: { "content-type": "application/json" },
          method: "POST",
        })
        .then((data) => {
          props.state.actionListener(createAction("GQL DATA FETCHED", {location: props.state.location.location}))
          return null
        })
        .catch((err) => {
          return null
        })
      }
    }

export default GQLCommand
