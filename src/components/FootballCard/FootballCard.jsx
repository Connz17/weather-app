import "./FootballCard.scss";


const FootballCard = ({stadium, tournament, start, match }) => {
  return (
    <div className="game-card">
        <h2 className="game-card__competition">{tournament}</h2>
        <h3 className="game-card__game">{match}</h3>
        <h4 className="game-card__time">{start}</h4>
        <h4 className="game-card__location">@{stadium}</h4>
    </div>
  )
}

export default FootballCard