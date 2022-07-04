import React from "react"
import { Team, TeamImage, TeamJob, TeamName } from "./styles"

interface TeamCardProps {
  img: string,
  name: string,
  job: string
}

const TeamCard: React.FC<TeamCardProps> = ({ img, name, job }) => {
  return (
    <Team>
      <TeamImage src={img} />
      <TeamName>{name}</TeamName>
      <TeamJob>{job}</TeamJob>
    </Team>
  )
}

export default TeamCard
