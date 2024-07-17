function skillsMember() {
    let members = [
        {name: 'John', skill: 'JavaScript'},
        {name: 'Jane', skill: 'JavaScript'},
        {name: 'Jack', skill: 'TypeScript'},
        {name: 'Jill', skill: 'Python'}
    ];
    return members.filter(member => member.skill === 'JavaScript');
}