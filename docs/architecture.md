KennisSprint – Architectuur

Pagina's
index.html
  cursus selectie (vak / niveau / jaar)

course.html
  trainer voor gekozen cursus

Data flow
index.html → ?course=ID → course.html

Code
app.js
  centrale quiz engine

data.js
  alle cursussen

Datastructuur

course = {
  id
  subject
  level
  grade
  title
  chapters
  datasets
  modes
}

datasets
  terms
  years
  persons (future)

modes
  {id,label,dataset}
