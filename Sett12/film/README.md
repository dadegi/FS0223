# Film

Il progetto è stato creato utiilizzando [Angular CLI](https://v14.angular.io/docs) versione 14.2.11.

## Implementazione e avvio

Per il corretto funzionamento del progetto seguire i seguenti passaggi:

1. npm i (per la ricostruzione delle dipendenze del progetto)
2. npm i json-server json-server-auth
3. npm i @auth0/angular-jwt
4. npm i concurrently
5. Implementare le seguenti righe nel package.json:
##### "backend": "json-server-auth --watch db.json --port 3000",
##### "fullstack": "concurrently \"npm run backend\" \"npm run start\""
7. ng add @ng-bootstrap/ng-bootstrap (per future implementazioni)
8. npm run fullstack (avvio del progetto)
