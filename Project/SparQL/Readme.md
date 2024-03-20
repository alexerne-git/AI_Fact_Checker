SELECT DISTINCT ?person $personLabel $start $end
WHERE {
  ?person wdt:P39 wd:Q11696.
  ?person p:P39 ?statement.
  ?position_held_statement ps:P39 wd:Q11696.
  ?statement pq:P580 ?start. 
  ?statement pq:P582 ?end
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
ORDER BY DESC($start)

https://query.wikidata.org/



Sources: https://towardsdatascience.com/where-do-mayors-come-from-querying-wikidata-with-python-and-sparql-91f3c0af22e2
https://www.wikidata.org/wiki/Wikidata:SPARQL_query_service/A_gentle_introduction_to_the_Wikidata_Query_Service