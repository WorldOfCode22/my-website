import * as React from 'react'
import { ApplicationContext } from "../../App";
import GeneralLoading from '../loading/general-loading';

interface IProps {
  command: string
}

// work in progress
const GQLCommand = (props: IProps) => (
  <ApplicationContext.Consumer>
    {state => {
      if (state.gql.loading) {
        return <GeneralLoading />
      } else {
        return null
      }
    }}
  </ApplicationContext.Consumer>
)

export default GQLCommand
