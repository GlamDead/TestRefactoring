function func(s, a, b) {

    if (s.length === 1) {
        return -1
    }
        
    if (a.length === 0){
        return (b.length === 0) ? -1 : s.lastIndexOf(b)
    }
        
    if (b.length === 0){
        return (a.length === 0) ? -1 : s.lastIndexOf(a)
    }
    
    return (Math.max(s.lastIndexOf(a), s.lastIndexOf(b)))
	
}
