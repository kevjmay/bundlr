const services = [
    {serviceName: "Electric", id: crypto.randomUUID()},
    {serviceName: "Gas", id: crypto.randomUUID()},
    {serviceName: "Water", id: crypto.randomUUID()},
    {serviceName: "TV License", id: crypto.randomUUID()},
    {serviceName: "Broadband", id: crypto.randomUUID()}
];

function Services() {
    return (
        <ul>
            {services.map((service) => (
                <li key={service.id}>{service.serviceName}</li>
            ))}
        </ul>
    );

}

export default Services;