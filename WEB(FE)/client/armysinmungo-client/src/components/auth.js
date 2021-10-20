const users = [
    {
        userId: '20-12345678',
        password: '12345678',
        userName: '정성훈',
        role: 'soldier', // or commander
    }
]

export function signIn({ userId, password }) {
    // 서버랑 통신해서 status에 따라 구분
    
    const user = users.find(
        (user) => user.userId === userId && user.password === password
      );
    if(user === undefined) throw new Error();
    localStorage.setItem("userName", user.userName);
    localStorage.setItem("userMilNum", user.userId);
    localStorage.setItem("userRole", user.role);
    return user;
}