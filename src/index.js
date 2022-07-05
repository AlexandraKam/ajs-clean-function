export default function health(user) {
  if (user.health > 50) {
    return 'healthy';
  }
  if (user.health < 15) {
    return 'critical';
  }
  return 'wounded';
}
