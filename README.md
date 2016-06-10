# tfk-seneca-dsf
Microservice for dsf lookups

```curl -d '{"role": "dsf", "cmd":"lookup", "foedselsnr":"01010750160"}' -v http://localhost:8000/act```

```curl -d '{"role": "dsf", "cmd":"lookup", "foedselsnr":"01010750160", "etternavn":"Topstad", "fornavn":"Tomas"}' -v http://localhost:8000/act```