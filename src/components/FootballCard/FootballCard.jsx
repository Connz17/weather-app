import "./FootballCard.scss";


const FootballCard = ({stadium, tournament, start, match }) => {
  return (
    <div>
        <h2>{tournament}</h2>
        <h3>{match}</h3>
        <h4>{start}</h4>
        <h4>@{stadium}</h4>
    </div>
  )
}

export default FootballCard