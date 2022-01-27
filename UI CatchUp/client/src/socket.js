import io from 'socket.io-client';
const sockets = io('http://localhost:3030', { autoConnect: true, forceNew: true });
export default sockets;
