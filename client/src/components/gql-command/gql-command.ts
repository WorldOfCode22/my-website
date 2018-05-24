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
        .then((response) => {
          return response.json()
        })
        .then(
          (data) => {
            if(data.errors.length === 0){
              props.state.actionListener(createAction("GQL DATA FETCHED", {location: props.state.location.location, gql: {data: data.data}}))
            } else {
              props.state.actionListener(createAction("GQL FETCH ERROR", {gql: {errors: data.errors}, location: props.state.location.location}))
            }
          }
        )
        .catch((err) => {
          // tslint:disable-next-line:no-console
          console.log(err)
          return null
        })
      }
    }

export default GQLCommand
