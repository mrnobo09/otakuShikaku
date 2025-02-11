from flask import Blueprint
from flask_jwt_extended import jwt_required
from flask import jsonify,request
import requests
import pandas as pd
import numpy as np

MAL_routes = Blueprint('MAL_routes',__name__)

@MAL_routes.route('/get_anime/<int:anime_id>', methods=['GET'])
def getAnime(anime_id):
    try:
        response = requests.get(f'https://api.jikan.moe/v4/anime/{anime_id}')
        anime_data = response.json()
        return jsonify(anime_data)
    except requests.exceptions.RequestException as e:
        return jsonify({'error':str(e)}), 500
    
#similarity_matrix = np.load('./preprocessing/data/similarity_matrix.npy')
#anime_data = pd.read_pickle('./preprocessing/data/anime_data.pkl')

#@MAL_routes.route('/recommend', methods=['GET'])
#def recommend():
#    anime_id = int(request.args.get('anime_id'))
#    idx = anime_data.index[anime_data['anime_id'] == anime_id].tolist()[0]
#    similarity_scores = list(enumerate(similarity_matrix[idx]))
#    sorted_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)
#    top_indices = [i[0] for i in sorted_scores[1:11]]
#    recommendations = anime_data.iloc[top_indices].to_dict('records')
#    return jsonify(recommendations)

@MAL_routes.route('/top', methods=['GET'])
def topAnime():
    try:
        response = requests.get(f'https://api.jikan.moe/v4/top/anime')
        return jsonify(response.json()['data'][:10])
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500

@MAL_routes.route('/this_season',methods=['GET'])
def this_season():
    season = 'spring'
    year = '2024'
    try:
        temp_response = requests.get(f'https://api.jikan.moe/v4/seasons/{year}/{season}')
        response = temp_response.json()
        first_10_entries = response.get('data',[])[:10]
        return first_10_entries
    except requests.exceptions.RequestException as e:
        return jsonify({'error':str(e)}), 500
        










