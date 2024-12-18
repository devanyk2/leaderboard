export type {entry};

interface entry{
    name: String,
    score: Number,
  }
  

export default function LeaderTable( {entries}: entry[] ) {
    return (
        <ol>
            { entries.map( (ent: entry) => (
                <li>{ent.name} : {ent.score}</li>
            ))}
        </ol>
    )
}