import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import MultiLabelBinarizer

def preprocess_and_save_data(csv_file_path, anime_pickle_path, similarity_matrix_path):

    anime_data = pd.read_csv(csv_file_path)

    mlb = MultiLabelBinarizer()
    genres = anime_data['Genres'].str.split(', ')
    genre_features = mlb.fit_transform(genres)

    tfidf = TfidfVectorizer(stop_words='english')
    synopsis_features = tfidf.fit_transform(anime_data['Synopsis'])

    combined_features = np.hstack((genre_features, synopsis_features.toarray()))

    similarity_matrix = cosine_similarity(combined_features)

    np.save(similarity_matrix_path, similarity_matrix)
    anime_data.to_pickle(anime_pickle_path)

if __name__ == "__main__":
    preprocess_and_save_data('./data/anime_data.csv', './data/anime_data.pkl', './data/similarity_matrix.npy')
