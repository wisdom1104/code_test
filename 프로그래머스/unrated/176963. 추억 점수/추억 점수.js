function solution(name, yearning, photo) {
  const answer = {};
  for (let i = 0; i < name.length; i++) {
    answer[name[i]] = yearning[i];
  }

  return photo.map((arr) =>

    arr.reduce((acc, cur) => acc + (answer[cur] || 0), 0)
  );
}