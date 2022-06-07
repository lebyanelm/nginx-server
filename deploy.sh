# remove any running kubernetes resources
echo $(kubectl delete -f deployment.yml)

# restart the resources again
echo $(kubectl create -f deployment.yml)

# list all the pods after 10s
sleep 10
kubectl get pods
