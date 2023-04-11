export default function Budget({title, client, total,date, services=[]}) {
  return (
    <div>
      <div>
        <p className='name'>{client}</p>
        <h3>{title}</h3>
        <ul>
          {services.map((s, i) => s.checked && <li key={i}>{s.label}</li>)}
        </ul>
        <p className='date'>{new Date(date).toGMTString().split(' ').splice(1,4).join(' ')}</p>
      </div>
        <p>{total}€</p>
    </div>
  )
}
