# Spot² code challenge 

This code challenge intends to create a location map with the available Spots in CDMX allowing to filter data such as lease term and type of spot (on street, mall or mall island).

## Run the application 
```
npm start
```
## Running tests
In  order to run some very simple tests execute the command:
```
npm run test
```
At the moment of writing this description, the test checks for the **map** component to render:
```
it("should render component MapContainer", async () => {
	render(<MapContainer  />);
});
```

## The application

To access the API I use a custom fetch function capable of handle AJAX requests, although in this exercise we only use the method GET.  I send a defaultHeader object stating that the requests only accepts json format. Is in this object where I also send the Authorization key.
```
const  defaultHeader  = {
	accept:  "application/json",
	authorization:  "Bearer 6|PWlvybfGU5SB9MRZkzDJ6jJgESQFPTWUKYpszzhf",
};
```
# What is pending or missing

 - Responsivenesssssss... I usually would develop first for mobile but giving the presented view I preferred not to take any risk due to the given time window for delivery.
 - Yeah... I know is the heart of the app, but I will need a little more time to design an optimal **filtering** system.

# What I´d improve

 - Of course the styles. It would help to have a Figma design.
 - The map should be more user friendly. Perhaps with the use of **clusters**.

> **Note:** I intend to keep working in this project because is a great practice opportunity, but given the time already taken I upload this first commit.

## Conclusion

My deepest thanks to the Spot² team for this opportunity and hope to hear from you any time in the future. I know the application requires some work to do and have no doubts I'll keep working on it since has been so  much fun to do so far and it really was a very valuable exercise.