import Container from "../components/container"

const Index = (props) => {
	return (	
		<Container>
			<h1>{props.saludo}</h1>							
		</Container>
		)
}
		
Index.getInitialProps = () => {
	return { saludo : "Super Héroes App" }
}

export default Index