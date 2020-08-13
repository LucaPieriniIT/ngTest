
# ngTest - Pierini Luca

**[TEST ANGULAR]**

L’obiettivo dell’applicativo è visualizzare due pagine contenenti informazioni su utenti di test, recuperate da un’API REST disponibile liberamente online.
L’API da cui recuperare i dati è: https://reqres.in/api/users

La prima schermata deve mostrare due elenchi di utenti: “Utenti disponibili” e “Utenti controllati”.

Lo scopo della schermata è visualizzare un elenco con i dati di base degli utenti disponibili e permettere di aggiungerli all’elenco di utenti controllati.

Ogni oggetto dell’elenco “Utenti disponibili” deve visualizzare il nome completo e l’avatar dell’utente, oltre ad un bottone che permette di marcare l’utente come “controllato”, aggiungendolo quindi all’elenco di “Utenti controllati”

Gli “Utenti disponibili” inizialmente saranno tutti quelli recuperati dall’API.

Al click sull’avatar di un utente, l’applicativo deve navigare verso la seconda schermata.
La seconda schermata deve mostrare tutti i dati dell’utente selezionato:

* Id
* Avatar
* Nome completo
* Email

## Getting Started

Eseguire `ng serve` per un ambiente di sviluppo. Navigare su `http://localhost:4200/`.

## Building

Eseguire `ng build` per buildare il progetto. Gli artifacts saranno posizionati nella cartella `dist/`. Usare il flag `--prod` per una production build.

## Built With

* [Angular CLI 10.0.5](https://cli.angular.io/)

## Authors

* **Luca Pierini** - *Initial work* - [LucaPieriniIT](https://github.com/LucaPieriniIT)

## Acknowledgments

L'applicazione è da intendersi solo dev-purposed. Non è stata realizzata con l'ottica di un deploy in production.
