function ServiceList(props) {
   
    if (!props.services) {
        return <div>Loading services...</div>;
    }

    if (props.services.length === 0) {
        return <div>There are no services listed at this time.</div>;
    }

    return (

        <ul>
            {props.services.map((service) => {
                return <li key={service}>{service}</li>;
            })}
        </ul>
    );

}

function Services() {

    const services = ["Electric", "Gas", "Water", "TV License", "Broadband"];

    return  (
        <div>
            <h1>Services: </h1>
            <ServiceList services={services}/>
        </div>
    );
}

export default Services;