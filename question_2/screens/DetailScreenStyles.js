import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    backgroundColor: '#f5f5f5',
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 15,
    color: '#333',
  },
  category: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
  },
});

export default styles;