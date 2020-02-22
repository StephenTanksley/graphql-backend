import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const Jobs = () => {
  const { loading, error, data } = useQuery(JOBS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      {data.jobs.map(
        (wholeObject: {
          id: number
          machine: string
          complaint: string
          tech: { name: string }
        }) => (
          <div>
            <p>{wholeObject.machine}</p>
            <p>{wholeObject.complaint}</p>
            <p>{wholeObject.tech.name}</p>
          </div>
        )
      )}
    </div>
  )
}

export default Jobs

const JOBS = gql`
  {
    jobs {
      id
      machine
      complaint
      tech {
        name
      }
    }
  }
`
