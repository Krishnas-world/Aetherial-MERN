class StressPlot extends React.PureComponent {
    constructor(props)
    {
      super(props);
      this.state = ({
        stressarr : [],
        datearr : [],
      });
    }

    fetch_data = () => {
      const stress = db.ref('symptoms/');
      stress.on('value', (snapshot) => {
        let array1 = []
        snapshot.forEach((childSnapshot) => {
          array1.push(childSnapshot.val().stress);
        });
        for (let x = 0; x <= array1.length; x++) {
          this.state.stressarr.push({
            x: x,y: JSON.parse("[" + array1 + "]")[x]
          });
        }
      });

      stress.on('value', (snapshot) => {
        let array2 = []
        snapshot.forEach((childSnapshot) => {
          array2.push(childSnapshot.val().date);
        });
        for (let x = 0; x <= array2.length; x++) {
          this.state.datearr.push({
            x: x,y: JSON.parse("[" + array2 + "]")[x]
          });
        }
      });
    }

    render() {
          const axesSvg = { fontSize: 15, marginLeft: 50, padding: 50, fill: '#008384', height: "30%",fontWeight: "400" };
          const xaxesSvg = { fontSize: 10, alignSelf: "stretch", flex:2, flexDirection: "space-around" , padding:40, marginBottom:40, fill: '#008384', fontWeight: "400" };
          const verticalContentInset = { top: 30, bottom:40, right: 40, lrft : 40 }
          const xAxisHeight = 30

                return (
                    <View style={styles.container}>

                                    <Text style={styles.heading}>Trend of Daily Parameter - Stress Levels
                                    </Text>
                                    <Text style={styles.semiHeading}>March-April 2020</Text>
                    <ScrollView horizontal={true} style={{ height: "70%", width: "100%", flexDirection: 'row' }}>

                        <YAxis
                            // Y AXIS DATA ARRAY
                            data = { this.state.stressarr }
                            style={{ marginBottom: xAxisHeight }}
                            contentInset={verticalContentInset}
                            svg={axesSvg} 

                         />
                         <View style={{ flex: 1, marginLeft: 10, marginRight: 20, width: 1800, height: "100%", marginBottom: 40 }}> 

                            <LineChart
                                style={{ flex: 1 , marginLeft: 5, marginRight: 1, justifyContent: 'space-around'}}
                                data={this.state.stressarr}
                                contentInset={verticalContentInset}
                                svg={{ stroke: '#00bcd4', strokeWidth: 1.5,}}
                            >
                                <Grid/>
                            </LineChart>
                            <XAxis
                                style={{ marginHorizontal: -10, height: xAxisHeight }}
                                // X AXIS DATA ARRAY
                                data = { this.state.datearr }
                                formatLabel={ (value, index) => dates[index].date }                    
                                contentInset={{ left: 10, right: 10 }}
                                svg={xaxesSvg}
                            /></View>
                        </ScrollView></View>
                )
            }        
        }
        export default StressPlot
        const styles = StyleSheet.create({
            container: {
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#d6ffff',
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
          },
            heading: {
              color:'#00bcd4',
              fontWeight: "400",
              fontSize: 20,
              marginBottom: 5,
              marginVertical: 30,
            },
            semiHeading: {
              color:'#008384',
              fontWeight:"400",
              fontSize:15,
              justifyContent: 'flex-end',
              marginBottom: 25,
            }
          });