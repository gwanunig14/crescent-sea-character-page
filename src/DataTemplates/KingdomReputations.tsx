import Strings from "../Strings";

export type Reputation = 'hero' |'love' |'grateful' |'friendly' |'none' |'aware' |'dislike' |'hate' |'fear'

export const Reputations = { 
    HERO : Strings.HERO,
    LOVE : Strings.LOVE,
    GRATEFUL : Strings.GRATEFUL,
    FRIENDLY : Strings.FRIENDLY,
    NONE : Strings.NONE,
    AWARE : Strings.AWARE,
    DISLIKE : Strings.DISLIKE,
    HATE : Strings.HATE,
    FEAR : Strings.FEAR,
}

export default interface KingdomReputations {
    gartu: Reputation;
    drishma: Reputation;
    edneth: Reputation;
    brelloth: Reputation;
    portro: Reputation;
    hobantho: Reputation;
    crillatha: Reputation;
    virensa: Reputation;
    pirates: Reputation;
    independent: Reputation;
}