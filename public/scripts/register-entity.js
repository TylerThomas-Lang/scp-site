import EntryQuery from'./newEntryQuery.js';
const {entryIsEntity, grabEntityInfo } = EntryQuery;
document.addEventListener('DOMContentLoaded',  () => {
    grabEntityInfo()
    const entitySubmit = document.getElementById('register-entity-button')
    //entryIsEntity(entityType, ID, name, dangerClass, classification, cognitohazard, extraData)
    entitySubmit.onclick = () => {
        entryIsEntity(
            
        )
    }
})