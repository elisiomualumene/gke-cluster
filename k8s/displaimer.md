### Command to run Fortio / stress Test in a pod them kill that pod after test

- kubectl run -it fortio --rm --image=fortio/fortio -- load -qps 800 -t 120s -c 70 "http://goserver-service/healthz"