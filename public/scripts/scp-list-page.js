document.addEventListener('DOMContentLoaded', () => {
    fetch('/entities')
    .then(response => response.json())
    .then(data => {
        displayEntities(data);
    })
    .catch(error => {
        console.error('Error fetching entities:', error);
    });

    function displayEntities(entities) {
        const container = document.getElementById('entity-list');
        entities.forEach(entity => {
            const card = document.createElement('button');
            card.classList.add('entity-card');
            card.id = `list-item${entity.id}`;
            card.textContent = `SCP-${entity.ID}`;
            container.appendChild(card);

            card.addEventListener('click', () => {
                document.getElementById('scp-name').textContent = entity.name;
                document.getElementById('scp-desc').textContent = entity.description;
                document.getElementById('scp-class').textContent = entity.class;
                document.getElementById('scp-site').textContent = entity.siteID;
                document.getElementById('scp-clearance').textContent = entity.classification;
                document.getElementById('scp-cognito').textContent = entity.cognitohazard ? "True" : "False";
            });
        })
        
        

        document.getElementById('result-count').textContent = entities.length;
    }

    
});