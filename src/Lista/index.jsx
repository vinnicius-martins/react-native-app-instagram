import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const Lista = (props) => {
  const [feed, setFeed] = useState(props.data);

  const mostraLikes = () => {
    if (feed.likers <= 0) return

    return(
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    )
  }

  const like = () => {
    if (!feed.likeada) {
      setFeed({...feed, likeada: !feed.likeada, likers: feed.likers += 1})
    } else {
      setFeed({...feed, likeada: !feed.likeada, likers: feed.likers -= 1})
    }
  }

  return (
    <View style={styles.areaFeed}>
      <View style={styles.viewPerfil}>
        <Image source={{ uri: feed.imgperfil }} style={styles.fotoPerfil} />
        <Text style={styles.nomeUsuario}>{feed.nome}</Text>
      </View>

      <Image
        resizeMode="cover"
        style={styles.fotoPublicacao}
        source={{ uri: feed.imgPublicacao }}
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity onPress={like}>
          <Image
            source={(!feed.likeada) ? require( '../img/like.png') : require('../img/likeada.png')}
            style={styles.iconeLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={require('../img/send.png')}
            style={styles.iconeLike}
          />
        </TouchableOpacity>
      </View>

      {mostraLikes()}

      <View style={styles.viewRodape}>
        <Text style={styles.nomeRodape}>{feed.nome}</Text>
        <Text style={styles.descRodape}>{feed.descricao}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  areaFeed: {},
  nomeUsuario: {
    fontSize: 22,
    textAlign: "left",
    color: "black",
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
  },
  viewPerfil: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  areaBtn: {
    flexDirection: "row",
    padding: 5,
  },
  iconeLike: {
    width: 33,
    height: 33,
  },
  btnSend: {
    paddingLeft: 5,
  },
  viewRodape: {
    flexDirection: "row",
    alignItems: "center",
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: 'black',
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 5,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Lista;
