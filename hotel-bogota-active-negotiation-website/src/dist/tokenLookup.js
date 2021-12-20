import { SignedDevconTicket } from './Attestation/SignedDevonTicket';
export var tokenLookup = {
    "devcon": {
        onChain: false,
        tokenIssuerPublicKey: "TODO",
        title: 'Devcon Ticket',
        tokenName: 'devcon-ticket-local-3002',
        attestationOrigin: "https://stage.attestation.id/",
        tokenOrigin: "http://localhost:3002/",
        tokenUrlName: 'ticket',
        unEndPoint: '',
        tokenSecretName: 'secret',
        tokenIdName: 'id',
        unsignedTokenDataName: 'ticket',
        itemStorageKey: 'dcTokens',
        ethKeyitemStorageKey: 'dcEthKeys',
        emblem: 'https://raw.githubusercontent.com/TokenScript/token-negotiator/main/mock-images/devcon.svg',
        tokenParser: SignedDevconTicket
    },
    "ck": {
        onChain: true,
        title: 'Crypto Kitties Holder',
        smartContractAddress: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
        symbol: 'CK',
        emblem: 'https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/47274.png',
    }
};
//# sourceMappingURL=tokenLookup.js.map