// https://leetcode.com/problems/course-schedule/

export function canFinish(
  numCourses: number,
  prerequisites: number[][],
): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
  }

  // 0 = не посещали
  // 1 = сейчас в текущем DFS-пути
  // 2 = полностью проверили
  const state: number[] = Array(numCourses).fill(0);

  function dfs(course: number) {
    if (state[course] === 1) return false;
    if (state[course] === 2) return true;

    state[course] = 1;

    for (const next of graph[course]) {
      if (!dfs(next)) {
        return false;
      }
    }

    state[course] = 2;

    return true;
  }

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return false;
    }
  }

  return true;
}
