"use client";

function GenerateKey() {
    const alphabet = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"; 
    const size = 16;
    const bytes = new Uint8Array(size);
    window.crypto.getRandomValues(bytes);
    
    let key = "";
    for (let i = 0; i < size; i++) {
        key += alphabet[bytes[i] % alphabet.length];
        if ((i + 1) % 4 === 0 && i !== size - 1) key += "-";
    }
    
    return key;
}

export default GenerateKey