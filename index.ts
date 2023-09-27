const draweritems = document.getElementById('drawerinput');
document.addEventListener('DOMContentLoaded', () => {
    const contactInput = document.getElementById('contact') as HTMLInputElement;
    const numberInput = document.getElementById('number') as HTMLInputElement;
    const storageSimCheckbox = document.getElementById('remember') as HTMLInputElement;
    const storageDeviceCheckbox = document.getElementById('rem') as HTMLInputElement;
    const submitButton = document.querySelector('button[type="submit"]');
    
    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the form from submitting and page refreshing
            
            const contactInput = document.getElementById('contact') as HTMLInputElement;
            const numberInput = document.getElementById('number') as HTMLInputElement;
            
            const contact2 = contactInput.value.trim();
            const number2 = numberInput.value.trim();
            
            if (contact2 === '' || number2 === '') {
              alert('Please enter both contact and number.');
              return; 
            }
            else{

                const contact: string = contactInput.value;
                const number: string = numberInput.value;
                let storage: "Sim" | "device" = "device";
                
                if (storageSimCheckbox.checked) {
                    storage = "Sim";
                }
                
                const newContact = { contact, number, storage };
                console.log('New contact:', newContact);
                
                
                
                const contactParagraph = document.createElement('h1');
                contactParagraph.textContent = 'name: ' + newContact.contact;
                
                
                const numberParagraph = document.createElement('h2');
                numberParagraph.textContent = 'Number: ' + newContact.number;
                
                const storageParagraph = document.createElement('h3');
                storageParagraph.textContent = 'Storage: ' + newContact.storage;
                
                draweritems!.appendChild(contactParagraph);
                draweritems!.appendChild(numberParagraph);
                draweritems!.appendChild(storageParagraph);
                storageParagraph.className='mb-5'
                draweritems?.className='border border-slate-500 rounded px-4 py-2 text-white bg-slate-500 hover:bg-slate-600'
                
                
                
                contactInput.value = '';
                numberInput.value = '';
                storageSimCheckbox.checked = false;
                storageDeviceCheckbox.checked = false;
            }
            });
        }
    });
    const showdrawer=document.getElementById('showdrawer')
    const drawer=document.getElementById('drawer-bottom-example')
    const hidedrawer=document.getElementById('hidedrawer')
    showdrawer?.addEventListener('click',()=>{
        drawer?.classList.remove('hidden')
        
    })
    hidedrawer?.addEventListener('click',()=>{
        drawer?.classList.add('hidden')
        
    })
    
    
    