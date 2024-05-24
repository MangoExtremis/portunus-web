// **************
// This is basic and just provides client-side security and is also enforced on the server.
// This just exists because yes!
// **************
const blockedIPs = ['1.2.3.4'];

fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {
    const clientIP = data.ip;
    if (blockedIPs.includes(clientIP)) {
        document.body.innerHTML = '';
        window.location.replace("http://portunus.run.place/403.html");
    }
})
.catch(error => {
    console.error('[SECURITY ALERT] Failed to run security check:', error);
});