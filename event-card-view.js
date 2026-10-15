(() => {
 const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const icon=kind=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">${{
  place:'<path d="M12 21s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12Z"/><circle cx="12" cy="9" r="2"/>',
  audience:'<circle cx="12" cy="7" r="4"/><path d="M4 21v-3a8 8 0 0 1 16 0v3"/>',
  fee:'<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="3"/>'
 }[kind]}</svg>`;
 function imageUrl(event){
  const value=String(event.imageData||event.image||event.photo?.path||'');
  return /^(?:https?:\/\/|data:image\/(?:jpeg|png|webp);base64,|(?:\.\.?\/)?assets\/)/i.test(value)?value:'';
 }
 function deadline(event){
  if(event.cardDeadline)return event.cardDeadline;
  const raw=String(event.deadlineAt||event.deadlineISO||event.registrationDeadline||'');
  const exact=raw.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))/);
  if(exact){
   const months=['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
   const label=`${Number(exact[3])} ${months[Number(exact[2])-1]} ${exact[1]}`;
   return /T23:59(?::59)?\+06:00$/.test(raw)?label:`${label}, ${exact[4]}:${exact[5]} ${raw.endsWith('+06:00')?'· Бишкек':raw.endsWith('Z')?'· UTC':'· UTC'+(raw.match(/[+-]\d{2}:\d{2}$/)?.[0]||'')}`;
  }
  return event.deadline||event.date||'';
 }
 function render(event,{viewId='',preview=false}={}){
  const title=event.title||'Мероприятие',photo=imageUrl(event);
  const place=event.cardLocation||event.location||event.cityName||'';
  const audience=event.audience||event.level||'';
  const rawFee=event.fee||event.funding||'';
  const fee=/^уточн|^не указ|^нет дан/i.test(rawFee)?'':rawFee;
  const facts=[['place',place],['audience',audience],['fee',fee]].filter(([,value])=>value);
  const end=deadline(event);
  return `<article class="glass-card event-card kg-card"${viewId?` data-card-id="${escape(viewId)}"`:''}>
   ${photo?`<div class="kg-card-cover"><img class="event-card-image" src="${escape(photo)}" alt="${escape(title)}" loading="lazy"></div>`:`<div class="kg-card-heading"><span>${escape(place||event.categoryName||'Кыргызстан')}</span></div>`}
   <div class="kg-card-content">
    <span class="kg-card-category">${escape(event.categoryName||event.category||'Мероприятие')}</span>
    <h3>${escape(title)}</h3>
    <p class="kg-card-description">${escape(event.shortDescription||event.desc||event.description||'')}</p>
    ${facts.length?`<dl class="kg-card-facts">${facts.map(([key,value])=>`<div><dt>${icon(key)}<span class="kg-card-sr">${{place:'Место',audience:'Кому подходит',fee:'Стоимость'}[key]}</span></dt><dd>${escape(value)}</dd></div>`).join('')}</dl>`:''}
    ${end?`<div class="kg-card-deadline"><span>Приём до</span><strong>${escape(end)}</strong></div>`:''}
    <button class="btn btn-primary kg-card-button" type="button"${preview?' disabled':` data-event-id="${escape(viewId)}"`}>Подробнее</button>
   </div>
  </article>`;
 }
 window.ARAKETTIK_EVENT_CARDS={render};
})();
