const WHATSAPP_NUMBER = "5531986006826"; // WhatsApp da ACP Desenvolvimento
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("leadForm").addEventListener("submit", function(e){
 e.preventDefault();
 const name=document.getElementById("name").value.trim();
 const business=document.getElementById("business").value.trim();
 const service=document.getElementById("service").value;
 const details=document.getElementById("details").value.trim();
 const message=`Olá! Meu nome é ${name}.${business ? " Minha empresa é "+business+"." : ""}\nTenho interesse em: ${service}.\n${details ? "Detalhes: "+details+"\n" : ""}Gostaria de conversar sobre um orçamento.`;
 if(!WHATSAPP_NUMBER){alert("O formulário está pronto, mas o responsável pelo site precisa configurar o número de WhatsApp no código antes de publicar.\n\nMensagem preparada:\n\n"+message);return;}
 window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(message),"_blank","noopener,noreferrer");
});
