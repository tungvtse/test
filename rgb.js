function rgb(r, g, b) {
    r = Math.max(0, Math.min(255, r));
    console.log(r)
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    const hexR = r.toString(16).padStart(2, '0');
    console.log(hexR);
    const hexG = g.toString(16).padStart(2, '0');
    const hexB = b.toString(16).padStart(2, '0');

    return hexR + hexG + hexB;
}

console.log(rgb(299, 0, 211));